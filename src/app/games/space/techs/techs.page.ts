import { Component, OnInit } from '@angular/core';
import { Tech } from 'src/app/services/tech';
import { DbService } from '../../../services/db.service';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-techs',
  templateUrl: './techs.page.html',
  styleUrls: ['./techs.page.scss'],
})
export class TechsPage implements OnInit {
  
  techs:Observable<Tech[]>;

  constructor(private db:DbService,private router:Router) { }

  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if(res){
        this.techs = this.db.fetchTechOwner();       
      }
    });
  }

  navigateToSapce(){
    this.router.navigateByUrl('/games/space');
  }

}
