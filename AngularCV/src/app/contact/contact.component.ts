import { Component, Input, OnInit } from '@angular/core';
import ContactService from '../Service/contact.service'
import ContactModel from '../Model/ContactModel'
import {DelayService} from '../Service/dealy.service'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  placeholder: number[] = [1, 2, 3, 4, 5, 6]
  contactItems: ContactModel[] = [];
  @Input() showInHomePage: boolean = false;
  constructor(private contactService: ContactService,private delayService:DelayService) {

  }


  async ngOnInit(): Promise<void> {
    await this.delayService.delay(2500)
    this.contactItems = this.contactService.GetAllcontacts();
  }


}
