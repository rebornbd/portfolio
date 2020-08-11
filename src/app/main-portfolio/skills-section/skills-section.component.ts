import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent implements OnInit {

  frontEndSkills: any;
  backEndSkills: any;
  otherSkills: any;

  ngOnInit() {
    this.frontEndSkills = [
      { name: 'Angular', width: 90 },
      { name: 'JavaScript', width: 95 },
      { name: 'HTML5 | CSS3', width: 97 }
    ];

    this.backEndSkills = [
      { name: 'Node.js', width: 85 },
      { name: 'Python | Django', width: 80 },
      { name: 'Java', width: 85 },
      { name: 'PHP', width: 90 },
    ];

    this.otherSkills = [
      'DevOps',
      'Code Review',
      'GitHub',
      'Git',
      'Batch Scripts',
      'Linux Commands',
      'WordPress'
    ];
  }

}
