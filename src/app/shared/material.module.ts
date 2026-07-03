import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LayoutModule } from '@angular/cdk/layout';

const components = [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTableModule,
    MatChipsModule,
    MatExpansionModule,
    MatDialogModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatSortModule,
    MatStepperModule,
    MatMenuModule,
    MatRippleModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatTabsModule,
    DragDropModule,
    MatProgressSpinnerModule,
    LayoutModule
];

@NgModule({
    declarations: [],
    imports: [CommonModule, components],
    exports: [components],
    providers: [
        MatDatepickerModule,
        { provide: MAT_DATE_LOCALE, useValue: 'es-PE' }
    ]
})
export class MaterialModule {}
