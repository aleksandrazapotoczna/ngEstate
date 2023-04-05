import { Component } from '@angular/core';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss'],
})
export class TeamMembersComponent {
  users: User[] = [
    {
      image: 'assets/images/person-1.png',
      name: 'Jessica Weber',
      position: 'Founder',
      desc: 'I am a full-time licensed real estate agent and I’ve been helping my clients achieve the...',
      facebookLink: ' ',
      twitterLink: ' ',
      linkedinLink: ' ',
    },
    {
      image: 'assets/images/person-2.png',
      name: 'Mishel Marsh',
      position: 'Real Estate Agent',
      desc: 'I am a full-time licensed real estate agent and Ive been helping my clients achieve the...',
      facebookLink: ' ',
      twitterLink: ' ',
      linkedinLink: ' ',
    },
    {
      image: 'assets/images/person-3.png',
      name: 'Michel Richard',
      position: 'ArchitectureFounder',
      desc: 'I am a full-time licensed real estate agent and Ive been helping my clients achieve the...',
      facebookLink: ' ',
      twitterLink: ' ',
    },
  ];
}
