Ulventech Angular Test
==================================

I build this angular app based with ionic framework.

Installation of the application on your local machine
===================================================== 

You need to clone the project on your machine by typing the following command:

`git clone https://github.com/fiznux/angular-test.git`

Then do installation with these choices :

1. With Docker

    Run the following command:
    
    `make install`
    
    Open browser, go to http://localhost

2. Without Docker

    make sure you had npm and nginx installed.
    
    run `npm i -g ionic`
    
    go to ulventech folder
    
    run `ionic serve` (for development), the app will open automatically on the browser

    or
    
    run `ionic build --prod` (for prod), then copy to nginx and open it on browser
    
