Real estate purchase - project description
*******************

This is an example project of selling, buying houses, and recording deeds in city records. It covers how this process can be modeled in DAML, and provides a small script to demonstrate the flow. There are assumptions on parties' rights and obligations that might differ from real-world scenarios - it is simplified a bit.

Project participants:
- Alice, Bob, and Charlie - they are selling and buying houses
- Title admin - handles title search and provides a report for its clients
- City Clerk - creates houses in city records and updates deeds with new ownership info

### Building the system

DAML SDK 2.5.3 is required to be installed before building the project. Makefile contains the following operations:

- ``cd`` to the root directory
- Type ``make build``
- And then ``daml start`` - the start-up script will run the Sandbox, Navigator and the example flow will be run as well
- You may navigate to http://localhost:7500/sign-in/ to explore the ledger or this may open for you automatically if the DAML SDK is installed locally
- If needed the project files can be cleaned with: ``make clean``

### DAML workflow description
1. Using the House template the City Clerk creates the initial city records and deeds
2. House owners can list their houses on the market via the HouseListing template
3. Alice, Bob, and Charlie can place offers for a house with the HouseOffer template
4. The Owner can accept the offer of their choice. Once accepted, two payment requests are generated: one for the deposit and another for the remaining amount
5. When the deposit is paid a title search is initiated by the buyer
6. Title Admin prepares the title search and provides the report to the buyer. The buyer needs to pay the fee for the report.
7. If the buyer is satisfied with the title search then pays the remaining amount to the seller
8. When the payments are settled the title company notifies the city to update the city records
9. The city clerk updates the house ownership and simultaneously updates the deed as well

### Improvement ideas and features for future
- Handle user permissions properly (for example only City Clerk should be allowed to create Houses with deeds)
- There should be a 'public' concept to show active House Ads for everyone
- Ideally, HouseOffer takes a House ID only and not the whole house (or custom UI to show all house ads) - observer doesn't allow Contract Id, how to go about it?
- UI to make it more user-friendly (error messages should show up at the bare minimum)
- UI should enforce the correct workflow steps
- Add lawyers as parties with their respective clients and obligations as in real-world scenarios
- Current implementation assumes cash transactions, future enhancements should include banks and bank accounts
