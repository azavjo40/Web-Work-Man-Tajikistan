import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public workerMan: Array<any> = [];
  public avatar: string = 'assets/icons/avatar-user.png';

  constructor() {}

  ngOnInit(): void {
    this.getWorkerMan();
  }

  public getWorkerMan() {
    this.workerMan = [
      {
        id: 'dsfs4',
        avatar:
          'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
        title: 'Junior developer',
        country: 'Tajikistan',
        city: 'Dushanbe',
        price: 255,
        skils: [
          'JavaScript',
          'Angular',
          'React',
          'NodeJs',
          'NestJs',
          'SQL',
          'Python',
        ],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ad natus sapiente molestiae mollitia ut totam optio alias exercitationem impedit minima
        itaque cum distinctio debitis, necessitatibus ex repellat laudantium eos eligendi nobis ducimus ipsum voluptatum aliquam. Mollitia qui excepturi voluptates
        ratione quae nulla dignissimos provident tenetur maxime, minus, earum veritatis quod eius labore animi illo quo dicta sequi recusandae. Impedit odio, illo
        optio obcaecati reiciendis quo, dolorem pariatur repellendus esse possimus eos et similique voluptatem quam voluptatibus! Nam doloremque omnis mollitia
        dolorum assumenda praesentium accusantium eum aperiam enim! Sequi facilis officiis explicabo deserunt fugit perferendis rem fuga in necessitatibus ea.`,
        contactUser: {
          phone: '+992888555676',
          name: 'Azam',
          lastName: 'Sufiev',
        },
        images: [
          'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
          'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
          'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
          'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
          'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
          'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
          'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
          'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
        ],
      },
    ];
  }

  public spliceImage(images: any) {
    return [...images]?.splice(0, 3);
  }
}
