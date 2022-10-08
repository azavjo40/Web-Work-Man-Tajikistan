import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public workersMan: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    this.getWorkersMan();
  }

  public getWorkersMan() {
    this.workersMan = [
      {
        id: 'dsfs4',
        avatar: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
        title: 'Junior developer',
        country: 'Tajikistan',
        city: 'Dushanbe',
        price: 255,
        skils: ['JavaScript', 'Angular', 'React', 'NodeJs', 'NestJs', 'SQL', 'Python'],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ad natus sapiente molestiae mollitia ut totam optio alias exercitationem impedit minima
        itaque cum distinctio debitis, necessitatibus ex repellat laudantium eos eligendi nobis ducimus ipsum voluptatum aliquam. Mollitia qui excepturi voluptates
        ratione quae nulla dignissimos provident tenetur maxime, minus, earum veritatis quod eius labore animi illo quo dicta sequi recusandae. Impedit odio, illo
        optio obcaecati reiciendis quo, dolorem pariatur repellendus esse possimus eos et similique voluptatem quam voluptatibus! Nam doloremque omnis mollitia
        dolorum assumenda praesentium accusantium eum aperiam enim! Sequi facilis officiis explicabo deserunt fugit perferendis rem fuga in necessitatibus ea.`,
        contactUser: {
          phone: '+992888555676',
          name: 'Azam',
        },
      },
      {
        id: 'sdgdsg6',
        avatar: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
        title: 'Junior developer',
        country: 'Tajikistan',
        city: 'Dushanbe',
        price: 255,
        skils: ['JavaScript', 'Angular', 'React', 'NodeJs', 'NestJs', 'SQL', 'Python'],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ad natus sapiente molestiae mollitia ut totam optio alias exercitationem impedit minima
        itaque cum distinctio debitis, necessitatibus ex repellat laudantium eos eligendi nobis ducimus ipsum voluptatum aliquam. Mollitia qui excepturi voluptates
        ratione quae nulla dignissimos provident tenetur maxime, minus, earum veritatis quod eius labore animi illo quo dicta sequi recusandae. Impedit odio, illo
        optio obcaecati reiciendis quo, dolorem pariatur repellendus esse possimus eos et similique voluptatem quam voluptatibus! Nam doloremque omnis mollitia
        dolorum assumenda praesentium accusantium eum aperiam enim! Sequi facilis officiis explicabo deserunt fugit perferendis rem fuga in necessitatibus ea.`,
        contactUser: {
          phone: '+992888555676',
          name: 'Azam',
        },
      },
      {
        id: 'dfgfd6',
        avatar: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
        title: 'Junior developer',
        country: 'Tajikistan',
        city: 'Dushanbe',
        price: 255,
        skils: ['JavaScript', 'Angular', 'React', 'NodeJs', 'NestJs', 'SQL', 'Python'],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ad natus sapiente molestiae mollitia ut totam optio alias exercitationem impedit minima
        itaque cum distinctio debitis, necessitatibus ex repellat laudantium eos eligendi nobis ducimus ipsum voluptatum aliquam. Mollitia qui excepturi voluptates
        ratione quae nulla dignissimos provident tenetur maxime, minus, earum veritatis quod eius labore animi illo quo dicta sequi recusandae. Impedit odio, illo
        optio obcaecati reiciendis quo, dolorem pariatur repellendus esse possimus eos et similique voluptatem quam voluptatibus! Nam doloremque omnis mollitia
        dolorum assumenda praesentium accusantium eum aperiam enim! Sequi facilis officiis explicabo deserunt fugit perferendis rem fuga in necessitatibus ea.`,
        contactUser: {
          phone: '+992888555676',
          name: 'Azam',
        },
      },
      {
        id: 'dfhfdh6',
        avatar: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
        title: 'Junior developer',
        country: 'Tajikistan',
        city: 'Dushanbe',
        price: 255,
        skils: ['JavaScript', 'Angular', 'React', 'NodeJs', 'NestJs', 'SQL', 'Python'],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ad natus sapiente molestiae mollitia ut totam optio alias exercitationem impedit minima
        itaque cum distinctio debitis, necessitatibus ex repellat laudantium eos eligendi nobis ducimus ipsum voluptatum aliquam. Mollitia qui excepturi voluptates
        ratione quae nulla dignissimos provident tenetur maxime, minus, earum veritatis quod eius labore animi illo quo dicta sequi recusandae. Impedit odio, illo
        optio obcaecati reiciendis quo, dolorem pariatur repellendus esse possimus eos et similique voluptatem quam voluptatibus! Nam doloremque omnis mollitia
        dolorum assumenda praesentium accusantium eum aperiam enim! Sequi facilis officiis explicabo deserunt fugit perferendis rem fuga in necessitatibus ea.`,
        contactUser: {
          phone: '+992888555676',
          name: 'Azam',
        },
      },
      {
        id: 'fdhfdh5',
        avatar: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
        title: 'Junior developer',
        country: 'Tajikistan',
        city: 'Dushanbe',
        price: 255,
        skils: ['JavaScript', 'Angular', 'React', 'NodeJs', 'NestJs', 'SQL', 'Python'],
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ad natus sapiente molestiae mollitia ut totam optio alias exercitationem impedit minima
        itaque cum distinctio debitis, necessitatibus ex repellat laudantium eos eligendi nobis ducimus ipsum voluptatum aliquam. Mollitia qui excepturi voluptates
        ratione quae nulla dignissimos provident tenetur maxime, minus, earum veritatis quod eius labore animi illo quo dicta sequi recusandae. Impedit odio, illo
        optio obcaecati reiciendis quo, dolorem pariatur repellendus esse possimus eos et similique voluptatem quam voluptatibus! Nam doloremque omnis mollitia
        dolorum assumenda praesentium accusantium eum aperiam enim! Sequi facilis officiis explicabo deserunt fugit perferendis rem fuga in necessitatibus ea.`,
        contactUser: {
          phone: '+992888555676',
          name: 'Azam',
        },
      },
      {
        id: 'hjhgj5',
        avatar: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
        title: 'Junior developer',
        country: 'Tajikistan',
        city: 'Dushanbe',
        price: 255,
        skils: ['JavaScript', 'Angular', 'React', 'NodeJs', 'NestJs', 'SQL', 'Python'],
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
      },
      {
        id: 'tehj43',
        avatar: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
        title: 'Junior developer',
        country: 'Tajikistan',
        city: 'Dushanbe',
        price: 255,
        skils: ['JavaScript', 'Angular', 'React', 'NodeJs', 'NestJs', 'SQL', 'Python'],
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
      },
      {
        id: 'fdgdf6',
        avatar: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
        title: 'Junior developer',
        country: 'Tajikistan',
        city: 'Dushanbe',
        price: 255,
        skils: ['JavaScript', 'Angular', 'React', 'NodeJs', 'NestJs', 'SQL', 'Python'],
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
      },
      {
        id: 'dffdh7',
        avatar: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
        title: 'Junior developer',
        country: 'Tajikistan',
        city: 'Dushanbe',
        price: 255,
        skils: ['JavaScript', 'Angular', 'React', 'NodeJs', 'NestJs', 'SQL', 'Python'],
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
      },
      {
        id: 'dfdh6',
        avatar: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
        title: 'Junior developer',
        country: 'Tajikistan',
        city: 'Dushanbe',
        price: 255,
        skils: ['JavaScript', 'Angular', 'React', 'NodeJs', 'NestJs', 'SQL', 'Python'],
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
      },
      {
        id: 'gfgfhf3',
        avatar: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
        title: 'Junior developer',
        country: 'Tajikistan',
        city: 'Dushanbe',
        price: 255,
        skils: ['JavaScript', 'Angular', 'React', 'NodeJs', 'NestJs', 'SQL', 'Python'],
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
      },
      {
        id: 'dfhfdh7',
        avatar: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
        title: 'Junior developer',
        country: 'Tajikistan',
        city: 'Dushanbe',
        price: 255,
        skils: ['JavaScript', 'Angular', 'React', 'NodeJs', 'NestJs', 'SQL', 'Python'],
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
      },
      {
        id: 'ddfhdfhd4',
        avatar: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
        title: 'Junior developer',
        country: 'Tajikistan',
        city: 'Dushanbe',
        price: 255,
        skils: ['JavaScript', 'Angular', 'React', 'NodeJs', 'NestJs', 'SQL', 'Python'],
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
      },
      {
        id: 'dfgfdg7',
        avatar: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
        title: 'Junior developer',
        country: 'Tajikistan',
        city: 'Dushanbe',
        price: 255,
        skils: ['JavaScript', 'Angular', 'React', 'NodeJs', 'NestJs', 'SQL', 'Python'],
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
      },
      {
        id: 'dfgfdgfd43',
        avatar: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
        title: 'Junior developer',
        country: 'Tajikistan',
        city: 'Dushanbe',
        price: 255,
        skils: ['JavaScript', 'Angular', 'React', 'NodeJs', 'NestJs', 'SQL', 'Python'],
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
      },
      {
        id: 'dffdgg56',
        avatar: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
        title: 'Junior developer',
        country: 'Tajikistan',
        city: 'Dushanbe',
        price: 255,
        skils: ['JavaScript', 'Angular', 'React', 'NodeJs', 'NestJs', 'SQL', 'Python'],
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
      },
      {
        id: 'dffdgfd7',
        avatar: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
        title: 'Junior developer',
        country: 'Tajikistan',
        city: 'Dushanbe',
        price: 255,
        skils: ['JavaScript', 'Angular', 'React', 'NodeJs', 'NestJs', 'SQL', 'Python'],
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
      },
      {
        id: 'xbcfbf87',
        avatar: 'https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg',
        title: 'Junior developer',
        country: 'Tajikistan',
        city: 'Dushanbe',
        price: 255,
        skils: ['JavaScript', 'Angular', 'React', 'NodeJs', 'NestJs', 'SQL', 'Python'],
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
      },
    ];
  }
}
