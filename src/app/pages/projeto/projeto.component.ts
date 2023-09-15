import { Component, OnInit } from '@angular/core';
import { MockProjetos } from 'src/assets/projetos';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.scss']
})
export class ProjetoComponent implements OnInit {
  projeto = MockProjetos
  constructor() { }

  ngOnInit(): void {

    console.log(this.projeto)
  }

}
