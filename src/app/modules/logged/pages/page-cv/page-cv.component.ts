import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-cv',
  templateUrl: './page-cv.component.html',
  styleUrls: ['./page-cv.component.scss'],
})
export class PageCvComponent implements OnInit {
  public avatar: string = 'assets/icons/avatar-user.png';

  public form: any = this.fb.group({
    title: [null, [Validators.required]],
    city: ['test', [Validators.required]],
    description: [null, [Validators.required]],
    skils: [null, [Validators.required]],
    images: [],
  });

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.getWorkerMan();
  }

  public getChips(chips: any) {
    this.form.get('skils')?.setValue(chips)
  }

  public getWorkerMan() {
    this.form.patchValue({
      // title: 'JavaScript Develop',
      // city: 'Душанбе',
      // description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ad natus sapiente molestiae mollitia ut totam optio alias exercitationem impedit minima
      // itaque cum distinctio debitis, necessitatibus ex repellat laudantium eos eligendi nobis ducimus ipsum voluptatum aliquam. Mollitia qui excepturi voluptates
      // ratione quae nulla dignissimos provident tenetur maxime, minus, earum veritatis quod eius labore animi illo quo dicta sequi recusandae. Impedit odio, illo
      // optio obcaecati reiciendis quo, dolorem pariatur repellendus esse possimus eos et similique voluptatem quam voluptatibus! Nam doloremque omnis mollitia
      // dolorum assumenda praesentium accusantium eum aperiam enim! Sequi facilis officiis explicabo deserunt fugit perferendis rem fuga in necessitatibus ea.`,
      // skils: [
      //   'JavaScript',
      //   'Angular',
      //   'React',
      //   'NodeJs',
      //   'NestJs',
      //   'SQL',
      //   'Python',
      // ],
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
    });
  }

  public save(){
    if(this.form.valid) return this.form.markAllAsTouched()
    this.form.get('description')?.setValue(this.form.value.description.replace(/(\r\n|\n|\r)/gm, ""))
    console.log(this.form.value)
  }
}
