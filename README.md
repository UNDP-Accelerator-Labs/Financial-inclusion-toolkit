# About


This repository contains the code and content for the Toolkit for Digital Financial inclusion of the [UNDP Accelerator Labs](https://acceleratorlabs.undp.org). [This page](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/main/1_Getting%20started/background.md) explains our rationale and approach.


## Architecture

This website uses the metaphor of a toolkit, consisting of several "tools". Please visit [this page](https://github.com/UNDP-Accelerator-Labs/Financial-inclusion-toolkit/blob/main/1_Getting%20started/how-to-use-the-toolkit.md) for a full explanation. 

## Adding a tool 

Each tool consists of a *Factsheet*, that lives as a markdown page in the website; and of one or more *resources*. Resources are linked from the corresponding factsheet. Some resources are publicly accessible on the web, others live in UNDP's corporate filesystem. 

To add a tool, duplicate one of the factsheet files and keep the structure (items are marked in bold). Do not forget to insert a live link to the contributor's page (see below).

## Adding a contributor

The file `contributors.yml` contains the data about contributors. The website uses it to generate dynamically each contributor's page, as well as the [contributors page](/Team.html). To add a new contributor, you must: 

1. Add a picture of the contributor in the `public/imgs/contributors` folder.
1. Create an entry in the `contributors.yml` file. Each entry has a key of the form NAME-SURNAME (do not forget the hyphen between the two), and a value in the form of a set of key:value pairs. Follow the structure provided.
3. You can now create live links to the contributor's page from the factsheets of the tool she or he has helped create. The link takes the form `[Name Surname](/contributors/NAME-SURNAME.html)`. Remember these links are case-sensitive. 

### Monitoring usage

We have added a simple pageviews counter. We chose [Goat Counter](https://www.goatcounter.com) because it's completely open source, independent, and free for small sites. If you are duplicating the repo, remember to replace the snippet of code that calls the usage monitoring script: you will find it at the end of the `default.html` file, before the `</body>` tag. Usage statistics for all UNDP toolkits are visible here: https://undp-nie-toolkit.goatcounter.com/.   [Alberto Cottica](mailto:alberto.cottica@undp.org) is the admin of the Goat Counter account. 
