import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {EditorModule} from 'primeng/editor';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputSwitchModule} from 'primeng/inputswitch';
@NgModule({
  declarations: [UnauthorizedComponent, FileNotFoundComponent],
  imports: [
    FormsModule,
    PanelModule,
    TableModule,
    InputTextModule,
    CommonModule,
    CalendarModule,
    DropdownModule,
    FileUploadModule,
    ReactiveFormsModule,
    MultiSelectModule,
    NgbModule,
    EditorModule,
    InputSwitchModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    PanelModule,
    TableModule,
    InputTextModule,
    CommonModule,
    CalendarModule,
    DropdownModule,
    FileUploadModule,
    NgbModule,
    EditorModule,
    InputSwitchModule
  ],
})
export class SharedModule { }
