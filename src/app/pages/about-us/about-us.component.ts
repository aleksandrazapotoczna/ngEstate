import { Component } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { UserOpinion } from 'src/app/core/models/user-opinion.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
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

  selectedUser = 0;

  usersOpinions: UserOpinion[] = [
    {
      image: 'assets/images/client-1.png',
      name: 'Juniatur Rahman',
      position: 'CEO of Kamlavai',
      opinion:
        'Duis leo. Suspendisse non nisl sit amet velit hendrerit rutrum. Phasellus ullamcorper ipsum rutrum nunc. Pellentesque commodo eros a enim. Vivamus consectetuer hendrerit lacus. Pellentesque posuere. Donec mollis hendrerit risus. Sed libero. Sed a libero. Ut non enim eleifend felis pretium feugiat.',
    },
    {
      image: 'assets/images/client-3.png',
      name: 'Jessica Tomson',
      position: 'Sales manager',
      opinion:
        'Duis leo. Suspendisse non nisl sit amet velit hendrerit rutrum. Phasellus ullamcorper ipsum rutrum nunc. Pellentesque commodo eros a enim. Vivamus consectetuer hendrerit lacus. Pellentesque posuere. Donec mollis hendrerit risus. Sed libero. Sed a libero. Ut non enim eleifend felis pretium feugiatDuis leo. Suspendisse non nisl sit amet velit hendrerit rutrum Sed a libero. Ut non enim eleifend felis pretium feugiat.',
    },
    {
      image: 'assets/images/client-2.png',
      name: 'John Turman',
      position: 'Marketing manager',
      opinion:
        'Duis leo. Suspendisse non nisl sit amet velit hendrerit rutrum. Phasellus ullamcorper ipsum rutrum nunc. Pellentesque commodo eros a enim. Vivamus consectetuer hendrerit lacus',
    },
    {
      image: 'assets/images/client-2.png',
      name: 'John Turman',
      position: 'Marketing manager',
      opinion:
        'Duis leo. Suspendisse non nisl sit amet velit hendrerit rutrum. Phasellus ullamcorper ipsum rutrum nunc. Pellentesque commodo eros a enim. Vivamus consectetuer hendrerit lacus',
    },
    {
      image: 'assets/images/client-2.png',
      name: 'John Turman',
      position: 'Marketing manager',
      opinion:
        'Duis leo. Suspendisse non nisl sit amet velit hendrerit rutrum. Phasellus ullamcorper ipsum rutrum nunc. Pellentesque commodo eros a enim. Vivamus consectetuer hendrerit lacus',
    },
  ];

  nextSlide() {
    if (this.selectedUser === this.usersOpinions.length - 1) {
      this.selectedUser = 0;
    } else {
      this.selectedUser++;
    }
  }

  previousSlide() {
    if (this.selectedUser === 0) {
      this.selectedUser = this.usersOpinions.length - 1;
    } else {
      this.selectedUser--;
    }
  }
}
