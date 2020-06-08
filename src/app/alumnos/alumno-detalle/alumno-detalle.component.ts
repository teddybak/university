import { Component, OnInit, OnDestroy } from '@angular/core';
import { Routes, ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AlumnosService } from '../alumnos.service';
import { Subscribable, Subscription } from 'rxjs';
import { Alumno } from '../../interfaces/alumno.interface';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.css'],
})
export class AlumnoDetalleComponent implements OnInit, OnDestroy {
  id: number;
  alumno: Alumno;

  inscripcion: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alumnoService: AlumnosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inscripcion = this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id'));
      this.alumnoService.getAlumnoById(this.id).subscribe((data) => {
        //
        this.alumno = data[0];
      });
    });
  }

  ngOnDestroy() {
    this.inscripcion.unsubscribe();
  }

  editProfile(id) {
    if (id) {
      this.router.navigate([`alumnos/${id}/editar`]);
    }
  }
}
