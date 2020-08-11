import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-section',
  templateUrl: './research-section.component.html',
  styleUrls: ['./research-section.component.css']
})
export class ResearchSectionComponent implements OnInit {

  public researches: any;

  researName1: any = 'Automatic Question Generator (NLP)';
  researLink1: any = 'https://github.com/dipta-dhar/Automatic-Question-Generator';
  researDisc1: any =
  `NLP based thesis on Automatic Question Generator from text. AQG is design that
  takes as input text & gives as output is natural questions. AQG used python based
  libs NLTK, spaCy & NumPy.
  `;
  researTech1: any = ['Python', 'NLTK', 'spaCy', 'NumPy'];

  ngOnInit() {
    this.researches = [
      { name: this.researName1, link: this.researLink1, disc: this.researDisc1, technologies: this.researTech1 }
    ];
  }

}
