import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css']
})
export class ProjectsSectionComponent implements OnInit {

  public projects: any;

  proName0: any = 'My Blog';
  proLink0: any = 'https://github.com/rebornbd/blog';
  proDisc0: any =
  `This is a simple & Full featured Blog with Django web framework. Here are design admin &
  regular user funtionality.`;
  proTech0: any = ['Django', 'Bootstrap v3', 'jQuery', 'HTML/CSS', 'MySQL'];

  proName1: any = 'University Admission System';
  proLink1: any = 'https://github.com/dipta-dhar/University-Admission-System';
  proDisc1: any =
  `University Admission Management System is a web-based application built with the aim of
   computerizing the admission procedure in universities and colleges. The system proposed
   here incorporates handling and management of multi-departmental and multi-divisional
    system that includes various daily activities in the system.`;
  proTech1: any = ['Java', 'JSP/Servlet', 'jQuery', 'HTML/CSS', 'Oracle'];

  proName2: any = 'Teacher Feedback System';
  proLink2: any = 'https://github.com/dipta-dhar/Teacher-Feedback-System';
  proDisc2: any =
  `TFS is contains all of teacher & student information. A teacher can create a new student &
  deactivate a student. A student can update his/her profile & also gives a course feedback.
  Admin can delete teacher's or student's & also modify their info.
  `;
  proTech2: any = ['PHP', 'jQuery', 'HTML/CSS', 'MySQL'];

  proName3: any = 'Chess Engine';
  proLink3: any = 'https://github.com/dipta-dhar/Chess-Master';
  proDisc3: any =
  `This is simple & complete full chess engine. GUI is design by OpenGL. This is also
  design two mode play chess, Human vs Computer or Human vs Human.
  `;
  proTech3: any = ['CPP', 'OpenGL'];

  proName4: any = 'Online Voting System';
  proLink4: any = 'https://github.com/dipta-dhar/Online-Voting-System';
  proDisc4: any =
  `OVS is online based voting system. A authenticate voter can easyly gives his/her vote by using
  this syatem.
  `;
  proTech4: any = ['PHP', 'jQuery', 'HTML/CSS', 'MySQL'];

  ngOnInit() {
    this.projects = [
      { name: this.proName0, link: this.proLink0, disc: this.proDisc0, technologies: this.proTech0 },
      { name: this.proName1, link: this.proLink1, disc: this.proDisc1, technologies: this.proTech1 },
      { name: this.proName2, link: this.proLink2, disc: this.proDisc2, technologies: this.proTech2 },
      { name: this.proName3, link: this.proLink3, disc: this.proDisc3, technologies: this.proTech3 },
      { name: this.proName4, link: this.proLink4, disc: this.proDisc4, technologies: this.proTech4 }
    ];
  }
}
