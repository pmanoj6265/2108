import * as firebase from 'firebase';
import {Router} from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {
  token: string;
  constructor(private router: Router) {

  }
  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/login']);
        }
      )
      .catch(
        error => document.write('invalid credentials')
      );
  }
  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
          response => {
            this.router.navigate(['/Servers']);
            firebase.auth().currentUser.getToken()
              .then(
                (token: string) => this.token = token
              );
          }
        )
      .catch(
        error => document.write('Invalid credentials')
  );
  }
  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }
  isAuthenticated() {
    return this.token != null;
  }
  Logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
  }

}
