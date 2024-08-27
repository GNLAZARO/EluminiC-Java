import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CdbCalculadoraService } from './services/cdb-calculadora.service'; // Importa o serviço
import { CalculadoraRequest, CalculadoraResult } from './models';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule], 
  providers: [CdbCalculadoraService] 
})

export class AppComponent {
  ValorInicial: number = 0;
  Meses: number = 0;
  finalBruto: number = 0;
  finalLiquido: number = 0;


  constructor(private cdbCalculatorService: CdbCalculadoraService) { } 

  Calculo() {
    const request: CalculadoraRequest = {
      ValorInicial: this.ValorInicial,
      Meses: this.Meses
    };

    this.cdbCalculatorService.calcular(request).subscribe(
      (result: CalculadoraResult) => {
        this.finalBruto = result.finalBruto;
        this.finalLiquido = result.finalLiquido;
      },
      error => {
        console.error('Erro ao calcular', error);
      }
    );
  }

  
}
