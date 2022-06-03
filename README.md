# Whitelist Addresses Collector v1.0
A discord bot that allows to collect addresses in a standardized JSON file through a command

# What's the utility?
This bot will allow you to collect addresses for your whitelist in a very easy way in your discord server. You can then download a .JSON file that can be used to build a simple merkle tree using this repository: https://github.com/Lochki02/merkle-tree-generator

## Install

```sh
npm install
```

It's important to install the dependecies before uploading it on a host

## Usage

```sh
!register <address>
```

This command allows people to register their address in the whitelist, they will reveive an answer in their DMs

**Prerequisits**

None

**Possible Outcomes**

* **Successful:** You've registered
* **Wrong channel:** This is not the channel to do this
* **Invalid address:** Please provide a correct address
* **Already registered:** You are already registered
* **Registration disabled:** This action is not active

```sh
!turnOff
```

This command allows administrators to disable the `!register` command

**Prerequisits**

ADMINISTRATOR permission

**Possible Outcomes**

* **Successful:** The register command has been disabled
* **Insufficient perms:** You're not an administrator

```sh
!setChannel <#channel>
```

This command allows administrators to turn on the `!register` command in a specified channel. It's important to mention the channel and **NOT** use the channel ID

**Prerequisits**

ADMINISTRATOR permission

**Possible Outcomes**

* **Successful:** Channel set with ID <channel ID>
* **Insufficient perms:** You're not an administrator
* **Insufficient bot perms:** I can't see that channel

```sh
!deleteAddress <address>
```

This command allows administrators to delete an address from the list of registered addresses
  
**Prerequisits**

ADMINISTRATOR permission
  
**Possible Outcomes**

* **Successful:** User deleted with username  <owner address discord username>
* **Insufficient perms:** You're not an administrator
* **Invalid address:** Please provide a correct address
* **Address not found:** User not found
  
```sh
!getJSON
```
  
This command allows administrators to get the JSON file of the registered addresses list
  
**Prerequisits**

ADMINISTRATOR permission
  
**Possible Outcomes**

* **Successful:** JSON file
* **Insufficient perms:** You're not an administrator
