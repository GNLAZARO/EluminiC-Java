import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CalculadoraRequest, CalculadoraResult } from '../models';

@Injectable({
  providedIn: 'root'
})

export class CdbCalculadoraService {
    private apiUrl = 'http://localhost:5000/api/CdbCalculator'; 
  
    constructor(private http: HttpClient) { }
  
    calcular(cadastro: CalculadoraRequest): Observable<CalculadoraResult> {
      return this.http.post<CalculadoraResult>(this.apiUrl, cadastro);
    }

}