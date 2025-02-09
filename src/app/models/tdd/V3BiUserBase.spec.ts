import { V3BiUserBase } from '../V3BiUserBase';

describe('V3BiUserBase', () => {
  it('should create an instance with all attributes', () => {
    const user = new V3BiUserBase(
      'jdoe',
      'John',
      'Doe',
      'Acme Corp',
      'jdoe@example.com',
      'en',
      'Admin'
    );
    expect(user).toBeTruthy();
    expect(user.username).toBe('jdoe');
    expect(user.firstName).toBe('John');
    expect(user.lastName).toBe('Doe');
    expect(user.organization).toBe('Acme Corp');
    expect(user.email).toBe('jdoe@example.com');
    expect(user.preferredLanguage).toBe('en');
    expect(user.role).toBe('Admin');
  });

  it('should handle empty string as an attribute', () => {
    const user = new V3BiUserBase(
      '',
      'John',
      'Doe',
      'Acme Corp',
      'jdoe@example.com',
      'en',
      'Admin'
    );
    expect(user).toBeTruthy();
    expect(user.username).toBe('');
  });

  it('should handle undefined as an attribute', () => {
    const user = new V3BiUserBase(
      'jdoe',
      'John',
      'Doe',
      'Acme Corp',
      'jdoe@example.com',
      undefined as any,
      'Admin'
    );
    expect(user).toBeTruthy();
    expect(user.preferredLanguage).toBeUndefined();
  });

  it('should handle special characters in attributes', () => {
    const user = new V3BiUserBase(
      'jdoe@#$',
      'John',
      'Doe',
      'Acme Corp',
      'jdoe@example.com',
      'en',
      'Admin'
    );
    expect(user).toBeTruthy();
    expect(user.username).toBe('jdoe@#$');
  });

  it('should correctly initialize with a valid role', () => {
    const user = new V3BiUserBase(
      'jdoe',
      'John',
      'Doe',
      'Acme Corp',
      'jdoe@example.com',
      'en',
      'Admin'
    );
    expect(user).toBeTruthy();
    expect(user.role).toBe('Admin');
  });
});
