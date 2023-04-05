import { Component } from '@angular/core';
import { UserOpinion } from 'src/app/core/models/user-opinion.model';

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.scss'],
})
export class OpinionsComponent {
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
