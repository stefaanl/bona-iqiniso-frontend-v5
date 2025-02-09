import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as go from 'gojs';

const $ = go.GraphObject.make;

@Component({
  selector: 'app-uml-grouped-class-diagram',
  standalone: true,
  imports: [],
  templateUrl: './uml-grouped-class-diagram.component.html',
  styleUrl: './uml-grouped-class-diagram.component.css'
})
export class UmlGroupedClassDiagramComponent implements OnInit, AfterViewInit {
  @Input() nodedata: go.ObjectData[] | undefined;
  @Input() linkdata: go.ObjectData[] | undefined;
  @Input() minWidth!: string;
  @Input() minHeight!: string;
  @Output() value = new EventEmitter<string>();


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
    return { isTreeLink: false,
      fromEndSegmentLength: 0, toEndSegmentLength: 0 };
  }

  showPoint(loc: go.Point, obj: go.GraphObject) {
    let docloc = this.diagram.transformDocToView(loc);
    let elt = document.getElementById("position");
    if (elt) elt.textContent = obj +" Selected node location,\ndocument coordinates: " + loc.x.toFixed(2) + " " + loc.y.toFixed(2) +
      "\nview coordinates: " + docloc.x.toFixed(2) + " " + docloc.y.toFixed(2);
  }
  ngAfterViewInit() {
  }


  ngOnInit() {
    console.log('nodeDataArray', this.nodedata?.toString());
    console.log('linkDataArray', this.linkdata?.toString());
    this.diagram = new go.Diagram("workProductDiagram",
      // must be the ID or reference to div
      {
        initialDocumentSpot: go.Spot.Top,
        initialViewportSpot: go.Spot.Top,
        initialContentAlignment: go.Spot.Top,
        allowDrop: true,
        "animationManager.isEnabled": false,
        "undoManager.isEnabled": false,
        isReadOnly: true,
        allowSelect: false,
        "panningTool.isEnabled": false,
        "draggingTool.isEnabled": false,
        "dragSelectingTool.isEnabled": false
      });

    this.diagram.model = new go.Model();
    this.diagram.addDiagramListener("ObjectSingleClicked",
      e => {
        var part = e.subject.part;
        if (!(part instanceof go.Link)) {
          console.log("Clicked on diagram: " + part.data.key);
          this.value.emit(part.data.key);
        }
      });

    this.diagram.nodeTemplate =
      $(go.Node, "Auto",
        {
          locationSpot: go.Spot.Top,
          //click: (e, obj) => this.showPoint(obj.part? obj.part.location : new go.Point(200, 200), obj)
        },
        $(go.Shape, "RoundedRectangle", {
            fill: "white",
            minSize: new go.Size(10, 10),

          },
          new go.Binding('fill', 'color')),
        new go.Binding('desiredSize', 'size', go.Size.parse),
        new go.Binding("location", "loc", go.Point.parse),
        new go.Binding('angle', 'angle'),
        $(go.TextBlock, {
            margin: 2,
            font: "Bold 12pt Roboto",
            wrap: go.TextBlock.WrapFit,
            textAlign: "center",
            verticalAlignment: go.Spot.Center,
            spacingBelow: 2,
            spacingAbove: 2,
            editable: false},
          new go.Binding("text", "name"))
      );

    this.diagram.groupTemplate =
      $(go.Group, "Vertical",
        $(go.TextBlock,         // group title
          {
            alignment: go.Spot.TopCenter,
            font: "Bold 12pt Roboto"
          },
          new go.Binding("text", "name")),
        $(go.Panel, "Auto" ,
          {
            click: (e, obj) => this.showPoint(obj.part? obj.part.location : new go.Point(200, 200), obj)
          },
          $(go.Shape, "RoundedRectangle",  // surrounds the Placeholder
            { parameter1: 14,
              minSize: new go.Size(200, 100) },
            new go.Binding('fill', 'color')),
          new go.Binding("location", "loc", go.Point.parse),
          $(go.Placeholder,    // represents the area of all member parts,
            { padding: 8})  // with some extra padding around them
        ),

      );

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
