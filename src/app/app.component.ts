import { Component,Input,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tema3';
  @Input()Filt!: string;
  gameList =
   [{title: 'Dwarf Fortress',
     description:
      "The deepest, most intricate simulation of a world that's ever been created."},
    {title: 'Counter-Strike: Global Offensive',
     description:
     'Expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago'},
    {title: 'God of War Ragnarök',
     description:
     'Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go'},
    {title: 'Mario Party',
     description:
     "Join Mario and his friends in a event full of challenges, surprises, and most importantly, fun."},
    {title: 'Puyo-Puyo',
     description:
     'This slime-puzzle game will have you stick around for its entire crazy adventure'},
    {title: "Luigi's Mansion",
     description:
     'Help Luigi rescue his brother from the haunted mansion'}];

result=
[{title: 'Dwarf Fortress',
  description:
   "The deepest, most intricate simulation of a world that's ever been created."},
 {title: 'Counter-Strike: Global Offensive',
  description:
  'Expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago'},
 {title: 'God of War Ragnarök',
  description:
  'Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go'},
 {title: 'Mario Party',
  description:
  "Join Mario and his friends in a event full of challenges, surprises, and most importantly, fun."},
 {title: 'Puyo-Puyo',
  description:
  'This slime-puzzle game will have you stick around for its entire crazy adventure'},
 {title: "Luigi's Mansion",
  description:
  'Help Luigi rescue his brother from the haunted mansion'}];

  ngOnInit(): void {}

  filterGames(){
    const gameName = this.Filt;
    this.result = this.gameList.filter(game => game.title.includes(gameName));
  }

  sortGames(){
    this.result=this.result.sort((a, b) => {return this.compare(a.title, b.title)});
  }

  compare(a:string, b:string) {
    return (a < b ? -1 : 1) ;
  }
}
