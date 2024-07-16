---
description: Create a doc page with rich content.
---
# Getting Started {#getting_started}

Welcome to the NCM Self Service Workshop.

:::info

Estimated time to complete the labs depending on your familiarity level
with Nutanix, Kubernets and Openshift concepts is as follows:

- **NCM Self Service 101** - 180 minutes to 240 minutes
- **NCM Self Service 201** - 180 minutes to 225 minutes
- **NCM Self Service 301** - 180 minutes to 270 minutes

:::

## Agenda

- NCM Self Service 101
- NCM Self Service 201
- NCM Self Service 301

## Initial Setup

- Take note of the *Passwords* being used from you RX reservation details
- Log into your virtual desktops (connection info below)
- Login to Global Protect VPN if you have access

## Cluster Assignment

The instructor will inform the attendees their assigned clusters.

## Environment Details

Nutanix Workshops are intended to be run in the Nutanix Hosted POC environment. Your cluster will be provisioned with all necessary images,networks, and VMs required to complete the exercises.

### Networking

As we are able to provide three/four node clusters and single node clusters in the HPOC environment, we need to describe each sort of cluster separately. The clusters are setup and configured differently.

#### Three/Four node HPOC clusters

Three or four node Hosted POC clusters follow a standard naming convention:

- **Cluster Name** - DM3*XYZ*
- **Subnet** - 10.**55**.*XYZ*.0
- **Cluster IP** - 10.**55**.*XYZ*.37

For example:

- **Cluster Name** - POC055
- **Subnet** - 10.55.55.0
- **Cluster IP** - 10.55.55.37 for the VIP of the Cluster

Throughout the Workshop there are multiple instances where you will need to substitute *XYZ* with the correct octet for your subnet, for example:

| IP Address     |   Description |
| -------------- | --------------- |
| 10.55.*XYZ*.37 |  Nutanix Cluster Virtual IP   |
| 10.55.*XYZ*.39 |  **PC** VM IP, Prism Central |
| 10.55.*XYZ*.xx  |  **DC** VM IP, NTNXLAB.local Domain Controller   |


Each cluster is configured with 2 VLANs which can be used for VMs:


|Network Name        | Address             | VLAN    | DHCP Scope |
|------------------- | ------------------- |-------- | -----------|
|Primary_xx          | 10.42.*XYZ*.1/25    | 0       | 10.42.*XYZ*.50-10.42.*XYZ*.124|
|Secondary_xx        | 10.42.*XYZ*.129/25  | *XYZ1*  | 10.42.*XYZ*.132-10.42.*XYZ*.253|

### Credentials

:::note

The *Cluster Password* is unique to each cluster and will be provided by the leader of the Workshop.

:::

| Credential        | Username                 | Password           |
|------------------ |------------------------- |--------------------|
| Prism Element     | admin                    | *Cluster Password* |
| Prism Central     | admin                    | *Cluster Password* |
| Controller VM     | nutanix                  | *Cluster Password* |
| Prism Central VM  | nutanix                  | *Cluster Password* |

Each cluster has a dedicated domain controller VM, **DC**, responsible for providing AD services for the **NTNXLAB.local** domain. The domain is populated with the following Users and Groups:


| Group             | Username(s)                                  | Password   |
|-------------------| ---------------------------------------------|------------|
| Administrators    | Administrator                                | nutanix/4u | 
| Project Admin     | tenant1projadm-tenant10projadm               | nutanix/4u | 
| Project Consumer  | tenant1developer-tenant10developer           | nutanix/4u | 


## Access Instructions

The Nutanix Hosted POC environment can be accessed a number of different ways:

### Lab Access User Credentials

PHX Based Clusters: 

- **Username:** PHX-POCxxx-User01 (up to PHX-POCxxx-User20), 
- **Password:** *Provided by Instructor*

DM3 Based Clusters: 

- **Username:** DM3-POCxxx-User01 (up to DM3-POCxxx-User20), 
- **Password:** *Provided by Instructor*

### Parallels VDI

PHX Based Clusters Login to: <https://xld-uswest1.nutanix.com>

DM3 Based Clusters Login to: <https://dm3-ras.xlabs.nutanix.com>

**Nutanix Employees** - Use your **NUTANIXDC** credentials
**Non-Employees** - Use **Lab Access User** Credentials
