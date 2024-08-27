import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let componente: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    componente = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o aplicativo', () => {
    expect(componente).toBeTruthy();
  });

  it(`deve ter como título 'cdb-calculator'`, () => {
    expect(componente.title).toEqual('cdb-calculator');
  });

  it('deve renderizar o título em uma tag h1', () => {
    const compilado = fixture.nativeElement as HTMLElement;
    expect(compilado.querySelector('h1')?.textContent).toContain('Calculadora de CDB');
  });

});
