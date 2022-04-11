import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  public cinemaForm!: FormGroup; 
  public reload : boolean = false;
  public correctAnswers: boolean[] =[false,false,false,false,false,false,false,false,false,false]; 
  public count :number = 0; 

  constructor( private formBuilder : FormBuilder ) { }

  ngOnInit(): void {

    this.cinemaForm = this.formBuilder.group({
      question1  : ['', [ Validators.required ]  ],
      question2  : ['', [ Validators.required ]  ],
      question3  : ['', [ Validators.required ]  ],
      question4  : ['', [ Validators.required ]  ],
      question5  : ['', [ Validators.required ]  ],
      question6  : ['', [ Validators.required ]  ],
      question7  : ['', [ Validators.required ]  ],
      question8  : ['', [ Validators.required ]  ],
      question9  : ['', [ Validators.required ]  ],
      question10  : ['', [ Validators.required ]  ]
    });

  }

  showResultOrReload(): void {

    if (this.reload) {
      
      this.count = 0; 
      this.cinemaForm.reset();
      this.reload = false;

    } else {
      
      let r1 = this.cinemaForm.get('question1')!.value; 
      let r2 = this.cinemaForm.get('question2')!.value; 
      let r3 = this.cinemaForm.get('question3')!.value; 
      let r4 = this.cinemaForm.get('question4')!.value; 
      let r5 = this.cinemaForm.get('question5')!.value; 
      let r6 = this.cinemaForm.get('question6')!.value; 
      let r7 = this.cinemaForm.get('question7')!.value; 
      let r8 = this.cinemaForm.get('question8')!.value; 
      let r9 = this.cinemaForm.get('question9')!.value; 
      let r10 = this.cinemaForm.get('question10')!.value;
      
      console.log(this.cinemaForm.value)

      if (r1 == 'r2') {

        this.correctAnswers[0] = true; 
        
      } else {

        this.correctAnswers[0] = false; 

      }

      if (r2 == 'r1') {

        this.correctAnswers[1] = true; 
        
      } else {

        this.correctAnswers[1] = false;

      } 

      if (r3 == 'r1') {

        this.correctAnswers[2] = true; 
        
      } else {

        this.correctAnswers[2] = false; 

      }

      if (r4 == 'r2') {

        this.correctAnswers[3] = true; 
        
      } else {

        this.correctAnswers[3] = false; 

      }

      if (r5 == 'r3') {

        this.correctAnswers[4] = true; 
        
      } else {

        this.correctAnswers[4] = false; 

      }

      if (r6 == 'r1') {

        this.correctAnswers[5] = true; 
        
      } else {

        this.correctAnswers[5] = false;

      }

      if (r7 == 'r1') {

        this.correctAnswers[6] = true; 
        
      } else {

        this.correctAnswers[6] = false;

      }

      if (r8 == 'r2') {

        this.correctAnswers[7] = true; 
        
      } else {

        this.correctAnswers[7] = false; 

      }

      if (r9 == 'r1') {

        this.correctAnswers[8] = true; 
        
      } else {

        this.correctAnswers[8] = false; 

      }

      if (r10 == 'r3') {

        this.correctAnswers[9] = true; 
        
      } else {

        this.correctAnswers[9] = false; 

      }

      console.log(this.correctAnswers)

      for(let i=0; i<this.correctAnswers.length; i++){

        if(this.correctAnswers[i] == true){

          this.count++; 
        
        }

      }

      this.reload = true; 

    }

  }

}
