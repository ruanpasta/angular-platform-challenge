import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../../components';

interface Column {
  key: string;
  label: string;
}

@Component({
  selector: 'app-code-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './code-list.component.html',
  styleUrls: ['./code-list.component.css'],
})
export class CodeListComponent implements OnInit {
  columns: Column[] = [
    { key: 'codigo', label: 'Código' },
    { key: 'nome', label: 'Nome' },
    { key: 'alicotaFixa', label: 'Alíquota Fixa' },
    { key: 'fatoGerador', label: 'Fato Gerador' },
    { key: 'periodoApuracao', label: 'Período de Apuração' },
    { key: 'vencimento', label: 'Vencimento' },
  ];

  items: any[] = [
    {
      codigo: 1,
      nome: 'Registro 1',
      alicotaFixa: 10,
      fatoGerador: 'Fato 1',
      periodoApuracao: '2021',
      vencimento: '30/06/2021',
    },
    {
      codigo: 2,
      nome: 'Registro 2',
      alicotaFixa: 15,
      fatoGerador: 'Fato 2',
      periodoApuracao: '2022',
      vencimento: '31/07/2022',
    },
    {
      codigo: 3,
      nome: 'Registro 3',
      alicotaFixa: 20,
      fatoGerador: 'Fato 3',
      periodoApuracao: '2023',
      vencimento: '29/08/2023',
    },
  ];

  selectedItemsPerPage = 10;
  totalItems = '';

  ngOnInit(): void {
    this.totalItems = this.items.length.toString().padStart(2, '0');
  }
}
