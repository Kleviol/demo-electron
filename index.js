const { authenticate } = require('C:\Users\User\Downloads\electron-demo-main (1)\electron-demo-main\db\db.js');
const electron = require('electron')
const {app, BrowserWindow, Menu} = electron
const path = require('path')
const url = require('url')
// Function to handle login button click event
document.getElementById('loginButton').addEventListener('click', async () => {
  try {
      // Retrieve the input fields
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      async function authenticate(username, password) {
          try {
              // Query the admin table to check if the provided username and password match
              const { data, error } = await supabase
                  .from('admin') // Specify the 'admin' table
                  .select()
                  .eq('username', username)
                  .eq('password', password)
                  .single();

              if (error) {
                  throw new Error(error.message);
              }

              // If data is returned, authentication is successful
              // If data is null, authentication failed
              return data !== null;
          } catch (error) {
              throw new Error('An error occurred during authentication: ' + error.message);
          }
      }

      // Call the authenticate function
      const isAuthenticated = await authenticate(username, password);
      console.log('Authentication result:', isAuthenticated);
  } catch (error) {
      // Handle the error
      console.error('An error occurred while authenticating:', error);
  }
});




