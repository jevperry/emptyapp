/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MatComponent } from './mat.component';

describe('Mat: AngularExample', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MatComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(MatComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(MatComponent);
    let app = fixture.debugElement.componentInstance;
    expect(mat.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(MatComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});