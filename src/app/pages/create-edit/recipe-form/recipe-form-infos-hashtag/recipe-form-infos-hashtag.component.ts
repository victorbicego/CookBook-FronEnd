import {Component, Input, OnInit, Output, SimpleChanges, EventEmitter, OnChanges} from '@angular/core';
import {Difficulty} from "../../../../enums/difficulty";
import {HashtagService} from "../../../../services/hashtag/hashtag.service";
import {ClearService} from "../../../../services/clear/clear.service";
import {RecipeInterface} from "../../../../interfaces/recipe-interface";
import {HashtagInterface} from "../../../../interfaces/hashtag-interface";

@Component({
  selector: 'app-recipe-form-infos-hashtag',
  templateUrl: './recipe-form-infos-hashtag.component.html',
  styleUrls: ['./recipe-form-infos-hashtag.component.css']
})
export class RecipeFormInfosHashtagComponent implements OnInit, OnChanges {

  difficulties: Difficulty[] = [];
  hashtags: HashtagInterface[] = [];
  clear?: boolean;

  preparationTime?: number;
  portion?: number;
  difficultyGrade?: string;
  hashTagList?: HashtagInterface[];

  @Input() editRecipe?: RecipeInterface;
  @Output() sendInfo = new EventEmitter<any>();

  constructor(private hashtagService: HashtagService, private clearService: ClearService) {
    Object.values(Difficulty).forEach(difficulty => this.difficulties.push(difficulty));
  }

  ngOnInit(): void {
    this.hashtagService.getAllHashTags();
    this.hashtagService.returnHashtagList().subscribe(hashtags => this.hashtags = hashtags);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.editRecipe !== undefined) {
      this.preparationTime = this.editRecipe.preparationTime;
      this.portion = this.editRecipe.portion;
      this.difficultyGrade = this.editRecipe.difficultyGrade;
      this.hashTagList = this.editRecipe.hashTagList;
    }

    this.clearService.getClear().subscribe(clear => {
      this.clear = clear;
      if (clear) {
        this.preparationTime = undefined;
        this.portion = undefined;
        this.difficultyGrade = undefined;
        this.hashTagList = [];
      }
    });
  }

  onChange() {
    this.sendInfo.emit({
      preparationTime: this.preparationTime,
      portion: this.portion,
      difficultyGrade: this.difficultyGrade,
      hashTagList: this.hashTagList
    });
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

}
