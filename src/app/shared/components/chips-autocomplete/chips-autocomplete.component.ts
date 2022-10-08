import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-chips-autocomplete',
  styleUrls: ['./chips-autocomplete.component.scss'],
  templateUrl: './chips-autocomplete.component.html',
})
export class ChipsAutocomplete implements OnInit {
  @Input() placeholder: string = 'New chip...';
  @Output() getChips: EventEmitter<any> = new EventEmitter();
  @ViewChild('fruitInput') chipInput!: ElementRef<HTMLInputElement>;
  @Input() chipsArrays: any = [];
  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public chipCtrl = new FormControl('');
  public filteredChips: Observable<string[]>;
  public chips: string[] = [];
  public allChips: string[] = [];

  constructor() {
    this.filteredChips = this.chipCtrl.valueChanges.pipe(
      startWith(null),
      map((chip: string | null) => (chip ? this._filter(chip) : this.allChips.slice())),
    );
  }

  ngOnInit(): void {
    this.chips = this.chipsArrays?.length ? this.chipsArrays : [];
  }

  public addByBlur(event: any) {
    const value = (event.target.value || '').trim();

    // Add our fruit
    if (value) {
      this.chips.push(value);
      this.getChips.emit(this.chips);
    }

    // Clear the input value
    this.chipCtrl.reset();
  }

  public addByEnter(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.chips.push(value);
      this.getChips.emit(this.chips);
    }

    // Clear the input value
    event.chipInput!.clear();
    this.chipCtrl.setValue(null);
  }

  public remove(fruit: string): void {
    const index = this.chips.indexOf(fruit);
    if (index >= 0) {
      this.chips.splice(index, 1);
      this.getChips.emit(this.chips);
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allChips.filter((chip) => chip.toLowerCase().includes(filterValue));
  }
}
