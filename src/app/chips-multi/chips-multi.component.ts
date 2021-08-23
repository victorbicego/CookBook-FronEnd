import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Hashtag} from "../interfaces/hashtag";
import {MatChip, MatChipList} from "@angular/material/chips";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {map} from "rxjs/operators";

@UntilDestroy()
@Component({
  selector: 'app-chips-multi',
  templateUrl: './chips-multi.component.html',
  styleUrls: ['./chips-multi.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ChipsMultiComponent,
      multi: true,
    },],
})
export class ChipsMultiComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  @Input() hashtagList: Hashtag[] | null = []
  

  @ViewChild(MatChipList)
  chipList!: MatChipList;

  value: string[] = [];

  onChange!: (value: string[]) => void;
  onTouch: any;

  constructor() {}

  writeValue(value: string[]): void {
    // When form value set when chips list initialized
    if (this.chipList && value) {
      this.selectChips(value);
    } else if (value) {
      // When chips not initialized
      this.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.chipList.chipSelectionChanges
      .pipe(
        untilDestroyed(this),
        map((event) => event.source))
      .subscribe((chip) => {
        if (chip.selected) {
          this.value = [...this.value, chip.value];
        } else {
          this.value = this.value.filter((o) => o !== chip.value);
        }

        this.propagateChange(this.value);
      });
  }

  propagateChange(value: string[]) {
    if (this.onChange) {
      this.onChange(value);
    }
  }


  selectChips(value: string[]) {
    this.chipList.chips.forEach((chip) => chip.deselect());

    const chipsToSelect = this.chipList.chips.filter((c) =>
      value.includes(c.value)
    );

    chipsToSelect.forEach((chip) => chip.select());
  }

  toggleSelection(chip: MatChip) {
    chip.toggleSelected();
  }
}
