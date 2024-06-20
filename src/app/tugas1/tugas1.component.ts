import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../core/app.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-tugas1',
  templateUrl: './tugas1.component.html',
  styleUrl: './tugas1.component.css'
})
export class Tugas1Component {

}
