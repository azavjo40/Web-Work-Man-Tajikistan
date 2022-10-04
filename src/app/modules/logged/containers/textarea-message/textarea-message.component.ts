import { Component, ChangeDetectionStrategy, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-textarea-message',
  templateUrl: './textarea-message.component.html',
  styleUrls: ['./textarea-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TextareaMessageComponent implements OnInit, OnDestroy {
  @Output() onMessageFamily: EventEmitter<any> = new EventEmitter();
  private subscription$: Subscription = new Subscription();
  public isEmojiPickerVisible!: boolean;
  public idParam!: string;

  public form: UntypedFormGroup = this.fb.group({
    message: [null],
    images: [null],
    documents: [null],
  });

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription$.add(this.route.params.subscribe((item: any) => (this.idParam = item?.id)));
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  public onKeyPress = (e: any) => {
    if (!e.shiftKey && e.keyCode === 13) {
      e.preventDefault();
      this.sendMessage();
    }
  };
  public addEmoji(event: any) {
    this.form.patchValue({ message: `${this.form.value.message ? this.form.value.message : ''} ${event.emoji.native} ` });
    this.closeOpenEmoji();
  }

  public handleFileInput(e: any) {
    this.form.patchValue({ [e.target.name]: e.target.files });
  }

  public sendMessage() {
    this.form.patchValue({ message: this.form.value.message.replace(/(\r\n|\n|\r)/gm, '') });
    this.onMessageFamily.emit(this.form.value);
    this.form.reset();
  }

  public closeOpenEmoji() {
    this.isEmojiPickerVisible = !this.isEmojiPickerVisible;
  }
}
