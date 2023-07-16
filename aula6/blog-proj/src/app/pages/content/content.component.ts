import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover: string = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2e03dbad-1afa-4282-8411-d813fd363226/d5sorwu-87a2ac2e-3bf4-42df-91cf-4d90bb64c8cd.jpg/v1/fill/w_960,h_404,q_75,strp/iron_man___tony_stark__banner_from_avengers_by_princemark_d5sorwu-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDA0IiwicGF0aCI6IlwvZlwvMmUwM2RiYWQtMWFmYS00MjgyLTg0MTEtZDgxM2ZkMzYzMjI2XC9kNXNvcnd1LTg3YTJhYzJlLTNiZjQtNDJkZi05MWNmLTRkOTBiYjY0YzhjZC5qcGciLCJ3aWR0aCI6Ijw9OTYwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Gpu9SGKcsIifcMd5M3qEic9ErFbZTB8Szq-hyKVoQkI"
  contentTitle: string = ""
  contentDescription: string = "descrição"
  private id:string | null = "0"

  constructor (
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void{
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponet(this.id)
  }

  setValuesToComponet(id:string | null) {
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover

  }

}
