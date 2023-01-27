/// <reference types="cypress" />
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page_objects/Login_PO";

const loginPage = new Login_PO();

Given(`I open applitools demo url`, () => {
  loginPage.navigateTo_Login_Page();
});

When(`I login with {} and {}`, (userName, password) => {
  loginPage.type_Username_Password(userName, password);
});

Then(`I confirm total balance is {int} in the account`, (amount) => {
  loginPage.confirm_Balance(amount);
});

When(`the {} of transcation is in {}`, (description, status) => {
  loginPage.status_Of_Transcation(description, status);
});
