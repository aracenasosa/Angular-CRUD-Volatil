import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular CRUD';
  msg = '';
  msg2 = '';
  msg3 = '';
  hidden = true;

  Employees = [
    { name: 'Carlos', position: 'Manager', email: 'carlos@gmail.com' },
    { name: 'Fazt', position: 'UI Designer', email: 'fazt@gmail.com' },
    { name: 'Manolo', position: 'Frontend Dev', email: 'manolo@gmail.com' }
  ];

  model: any = {};
  Name = '';
  Position = '';
  Email = '';
  myValue;

  addEmployees(name: HTMLInputElement, position: HTMLInputElement, email: HTMLInputElement): void {
    this.Name = name.value;
    this.Position = position.value;
    this.Email = email.value;

    this.model = {
      name: this.Name,
      position: this.Position,
      email: this.Email
    };

    this.Employees.push(this.model);
    this.msg = 'Successfully Added Record';
    name.value = '';
    position.value = '';
    email.value = '';
  }

  deleteEmployees(i): void {
    if (confirm('Are you sure, Your want to delete it?')) {
      this.Employees.splice(i, 1);
      this.msg2 = 'Successfully Deleted Record';
    }

  }

  editEmployees(i, name: HTMLInputElement, position: HTMLInputElement, email: HTMLInputElement): void {
    name.value = this.Employees[i].name;
    position.value = this.Employees[i].position;
    email.value = this.Employees[i].email;
    this.myValue = i;
    console.log(this.Employees[i]);
    this.hidden = false;
  }

  updateEmployee(name: HTMLInputElement, position: HTMLInputElement, email: HTMLInputElement) {
    this.Name = name.value;
    this.Position = position.value;
    this.Email = email.value;

    this.model = {
      name: this.Name,
      position: this.Position,
      email: this.Email
    };

    this.Employees.push(this.model);
    name.value = '';
    position.value = '';
    email.value = '';
    this.Employees.splice(this.myValue, 1);
    this.msg3 = 'Successfully Updated Record';
  }

  closeAlert(): void {
    this.msg = '';
    this.msg2 = '';
    this.msg3 = '';
  }
}
