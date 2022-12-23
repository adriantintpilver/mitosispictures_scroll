# mitosispictures_scroll

mitosispictures_scroll is a website that displays data from the https://cancerdb.com public database that contains data on all cancer treatments and related entities.

Someone's new treatment could be just 2 ideas away from being the next big cure. CancerDB can help you discover what those 2 missing pieces of knowledge are.

For cancer patients and their loved ones, we want to bring you the absolute best facts about cancer. We will deliver that information to you quickly, free of charge and you can trust it 100%.

<b>To upload a case</b>

In this first version you cannot upload cases from the web, only via github commit

<b>To delete a case</b>

In this first version you cannot delete cases from the web, only via github commit

<b>To edit a case</b>

In this first version you cannot edit cases from the web, only via github commit

<b>To build the full site locally</b>

The site is static and generated with NodeJs by the build.js processes (generates the index.html) and build_profiles.js (generates the profile pages).

For run this on your local enviroment, these are the instructions:


1- Go to the command line in the folder where you have the downloaded project. For example c:/mitosispictures_scroll
2- install packages with npm
```bash
          npm install .
3- install npm dependencies
```bash
          npm install . n-readlines fs path
```
4- Build the index home page
```bash
          node build
```
5- Build the profiles pages
```bash
          node build_profiles
```
5- navigate to http://localhost:80 (you navigate static HTML site)