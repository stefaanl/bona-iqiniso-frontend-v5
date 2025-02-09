import { Component } from '@angular/core';
import * as go from 'gojs';
import { AfterViewInit, EventEmitter, Input, OnInit, Output } from '@angular/core';



const $ = go.GraphObject.make;

@Component({
  selector: 'app-uml-class-diagram',
  standalone: true,
  imports: [],
  templateUrl: './uml-class-diagram.component.html',
  styleUrl: './uml-class-diagram.component.css'
})
export class UmlClassDiagramComponent  implements OnInit, AfterViewInit {
  @Input() nodedata: go.ObjectData[] | undefined;
  @Input() linkdata: go.ObjectData[] | undefined;
  @Input() minWidth!: string;
  @Input() minHeight!: string;
  @Output() click: EventEmitter<string> = new EventEmitter();


  public diagram!: go.Diagram;

  constructor() {
  }
  convertVisibility(v:any ) {
    switch (v) {
      case "public": return "+";
      case "private": return "-";
      case "protected": return "#";
      case "package": return "~";
      default: return v;
    }
  }
  linkStyle() {
    return { isTreeLink: false, fromEndSegmentLength: 0, toEndSegmentLength: 0 };
  }

  showPoint(loc: go.Point, obj: go.GraphObject) {
    let docloc = this.diagram.transformDocToView(loc);
    let elt = document.getElementById("position");
    if (elt) elt.textContent = obj +" Selected node location,\ndocument coordinates: " + loc.x.toFixed(2) + " " + loc.y.toFixed(2) +
      "\nview coordinates: " + docloc.x.toFixed(2) + " " + docloc.y.toFixed(2);
  }
  ngOnInit() {
  }


  ngAfterViewInit() {
    this.diagram = new go.Diagram("workProductDiagram",
      // must be the ID or reference to div
      {
        initialAutoScale: go.Diagram.UniformToFill,
        layout: $(go.LayeredDigraphLayout, { alignOption: go.LayeredDigraphLayout.AlignAll })
        // other Layout properties are set by the layout function, defined below
      });
    this.diagram.model = new go.Model();
    this.diagram.addDiagramListener("ObjectSingleClicked",
      e => {
        var part = e.subject.part;
        if (!(part instanceof go.Link)) {
          console.log("Clicked on " + part.data.key);
          this.click.emit(part.data.key);
        }
      });
    const propertyTemplate =
      $(go.Panel, "Horizontal",
        // property visibility/access
        $(go.TextBlock,
          { isMultiline: false, editable: false, width: 12 },
          new go.Binding("text", "visibility", this.convertVisibility('public'))),
        // property name, underlined if scope=="class" to indicate static property
        $(go.TextBlock,
          { isMultiline: true, editable: false },
          new go.Binding("text", "name").makeTwoWay(),
          new go.Binding("isUnderline", "scope", s => s[0] === 'c')),
        // property type, if known
        $(go.TextBlock, "",
          new go.Binding("text", "type", t => t ? ": " : "")),
        $(go.TextBlock,
          { isMultiline: false, editable: false },
          new go.Binding("text", "type").makeTwoWay()),
        // property default value, if any
        $(go.TextBlock,
          { isMultiline: false, editable: false },
          new go.Binding("text", "default", s => s ? " = " + s : ""))
      );
    const methodTemplate =
      $(go.Panel, "Horizontal",
        // method visibility/access
        $(go.TextBlock,
          { isMultiline: false, editable: false, width: 12 },
          new go.Binding("text", "visibility", this.convertVisibility)),
        // method name, underlined if scope=="class" to indicate static method
        $(go.TextBlock,
          { isMultiline: false, editable: true },
          new go.Binding("text", "name").makeTwoWay(),
          new go.Binding("isUnderline", "scope", s => s[0] === 'c')),
        // method parameters
        $(go.TextBlock, "()",
          // this does not permit adding/editing/removing of parameters via inplace edits
          new go.Binding("text", "parameters", parr => {
            var s = "(";
            for (var i = 0; i < parr.length; i++) {
              var param = parr[i];
              if (i > 0) s += ", ";
              s += param.name + ": " + param.type;
            }
            return s + ")";
          })),
        // method return type, if any
        $(go.TextBlock, "",
          new go.Binding("text", "type", t => t ? ": " : "")),
        $(go.TextBlock,
          { isMultiline: false, editable: true },
          new go.Binding("text", "type").makeTwoWay())
      );
    // this simple template does not have any buttons to permit adding or
    // removing properties or methods, but it could!
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    this.diagram.nodeTemplate =

      $(go.Node, "Auto",
        {
          locationSpot: go.Spot.Center,
          fromSpot: go.Spot.AllSides,
          toSpot: go.Spot.AllSides,
          click: (e, obj) => this.showPoint(obj.part? obj.part.location : new go.Point(200, 200), obj)
        },
        $(go.Shape, { fill: "white",          minSize: new go.Size(100, 50)
        }),
        $(go.Panel, "Table",
          { defaultRowSeparatorStroke: "black" },
          // header
          $(go.TextBlock,
            {
              row: 0, columnSpan: 2, margin: 3, alignment: go.Spot.Center,
              font: "medium 16pt roboto",
              isMultiline: false, editable: false
            },
            new go.Binding("text", "name").makeTwoWay()),
        ));

    this.diagram.linkTemplate =  // by default, "Inheritance" or "Generalization"
      $(go.Link, this.linkStyle(), { isTreeLink: true },
        $(go.Shape),
        $(go.Shape, { toArrow: "Triangle", fill: "white" })
      );

    this.diagram.linkTemplateMap.add("Association",
      $(go.Link, this.linkStyle(),
        $(go.Shape)
      ));

    this.diagram.linkTemplateMap.add("Realization",
      $(go.Link, this.linkStyle(),
        $(go.Shape, { strokeDashArray: [3, 2] }),
        $(go.Shape, { toArrow: "Triangle", fill: "white" })
      ));

    this.diagram.linkTemplateMap.add("Dependency",
      $(go.Link, this.linkStyle(),
        $(go.Shape, { strokeDashArray: [3, 2] }),
        $(go.Shape, { toArrow: "OpenTriangle" })
      ));

    this.diagram.linkTemplateMap.add("Composition",
      $(go.Link, this.linkStyle(),
        $(go.Shape),
        $(go.Shape, { fromArrow: "StretchedDiamond", scale: 1.3 }),
        $(go.Shape, { toArrow: "OpenTriangle" })
      ));

    this.diagram.linkTemplateMap.add("Aggregation",
      $(go.Link, this.linkStyle(),
        $(go.Shape),
        $(go.Shape, { fromArrow: "StretchedDiamond", fill: "white", scale: 1.3 }),
        $(go.Shape, { toArrow: "OpenTriangle" })
      ));

    this.diagram.model = new go.GraphLinksModel(
      {
        copiesArrays: false,
        copiesArrayObjects: false,
        linkCategoryProperty: "relationship",
        nodeDataArray: this.nodedata,
        linkDataArray: this.linkdata
      });

  }


}
