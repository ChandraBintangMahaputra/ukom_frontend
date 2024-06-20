import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../core/app.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-pegawai',
  templateUrl: './pegawai.component.html',
  styleUrls: ['./pegawai.component.css']
})
export class PegawaiComponent implements OnInit {
  displayedColumns: string[] = ['NIP', 'Nama', 'Alamat', 'Tanggal_Lahir', 'Kode_Divisi'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiService: AppService) {}

  ngOnInit() {
    this.apiService.get('/api/master/pegawai', '').subscribe(
      (response: any) => {
        if (response.success) {
          this.dataSource.data = response.data;
        }
      },
      (error: any) => {
        console.error('Error fetching data', error);
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  exportToExcel() {
    const filteredData = this.dataSource.filteredData;
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(filteredData);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Pegawai');
    XLSX.writeFile(wb, 'Pegawai.xlsx');
  }

  exportToPDF() {
    const doc = new jsPDF();
    doc.text('Pegawai List', 10, 10);
    autoTable(doc, {
      head: [this.displayedColumns],
      body: this.dataSource.filteredData.map((row: any) => [
        row.NIP, row.Nama, row.Alamat, row.Tanggal_Lahir, row.Kode_Divisi
      ])
    });
    doc.save('Pegawai.pdf');
  }
}
