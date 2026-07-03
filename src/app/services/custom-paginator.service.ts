import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class CustomPaginatorService extends MatPaginatorIntl {
  override itemsPerPageLabel = 'Elementos por página'; // Personalizar la etiqueta "Items per page"
  override nextPageLabel = ''; // Eliminar "Next page"
  override previousPageLabel = ''; // Eliminar "Previous page"
  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    const startIndex = page * pageSize + 1;
    const endIndex = Math.min(startIndex + pageSize - 1, length);
    return `${startIndex} - ${endIndex} de ${length}`; // Mantener el rango de elementos
  };
}