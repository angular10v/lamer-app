import { NgModule } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';




@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatInputModule,
        MatCardModule,
        MatListModule,
        MatPaginatorModule,
        MatExpansionModule,
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatInputModule,
        MatCardModule,
        MatListModule,
        MatPaginatorModule,
        MatExpansionModule
    ]
})
export class MaterialModule { }