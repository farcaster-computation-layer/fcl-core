![FCL](https://avatars.githubusercontent.com/u/165239205?s=200&v=4 "FCL")

## Overview

The Farcaster Computation Layer (FCL) is "Provable Chainlink for Farcaster"; a decentralized infrastructure that enables the extraction of ground truth for Farcaster activies. In other words, anyone can build community incentive systems like Tip. FCL allows for the efficient development of Farcaster-related applications by providing a common indexing and data processing layer to increasing entire development efficency.

## Impact

FCL has already been adopted by the DEGEN ecosystem's /degenpad service (https://warpcast.com/degenpad) founded by us, which utilized the FCL infrastructure to quickly develop and launch. /degenpad is the first Initial Tip Offering (ITO) service (i.e., launchpad) which collected community members' Tips over 1.6M $DEGEN tokens with 1374+ users. Accordingly, we got grants from the Degen as well. (https://www.degen.tips/degen-week) 3+ projects are waiting for reveal now.

The creation of FCL as an open-source project is expected to drive further adoption and integration within the Farcaster ecosystem.

## Farcaster Specificity

FCL is designed specifically for the Farcaster ecosystem, with the goal of providing a common infrastructure for building Farcaster-based applications. It is not intended for a wider audience beyond the Farcaster community. For example, our decentralized node are directly integrated with the Farcaster hub for rapid computation between nodes.

Currently, most of the apps are hardly dependent by Neynar for infrastructure and dune by indexing the data. I think FCL can be a good source of truth of Farcaster acitivities that Neynar also can leverage and giving more options than just one.

## Velocity

While we built a /degenpad we realized that the FCL is crucial for ecosystem growth. After we launched the service within 3 days as backend server, we decided to turn it into the distributed network. It only takes 3 weeks for testing its distributed functionality. This demonstrates a strong commitment in shipping features and functionality that Farcaster developers are seeking.

## Upcoming Roadmap
**[Early May, 2024]** We're releasing the abstract of FCL as open-source. With this architecture, you'll be able to set up a service structure equivalent to FCL.


**[Early to Mid May, 2024]** We'll provide examples of how to use FCL and share practical, usable endpoints. This will involve sharing computing resources unrelated to the open-sourcing of code. We want multiple services in the Farcaster ecosystem to share our computing resources for free or at prices cheaper than existing solutions, so we're planning to continue sharing computing resources for this.


**[Mid June, 2024]** We'll open-source decentralized nodes that validate FCL. This is when the real game begins 


**[After June, 2024]** We'll start recruiting participants for decentralized nodes.


The FCL project has been under active development for the past 2 months to become a OSS, with the goal of reaching version 1.0. This shows a sustained commitment to the project and the Farcaster ecosystem.


## Architecture Guide 

FCL consists of three sub-layers, functioning as modules:

### 1. MV Sublayer
Responsible for reading source data, it abstracts data fetching. This process includes reading and reducing distributed data from decentralized nodes for validation.
However, it's challenging for users to directly manage this. If the aim is to operate only functionally, it's best to depend on Neynar in the MV Sublayer.

We plan to publicly share the MV Sublayer managed by FCL and share computing resources.

### 2. Indexing Sublayer
This sublayer is responsible for indexing the read source data. Without indexing, data can be volatile or hard to access. However, indexing generally implies centralization. We run a decentralized indexing layer to address this.
Similarly, it's difficult for regular users to operate such a high-level decentralized indexer. We plan to release a module for individual nodes to achieve proper indexing performance using RocksDB and share computing resources.

### 3. Filtering Sublayer
This sublayer filters indexed data to extract valuable information. Unlike the above sublayers, it's easier for users to implement since it inherits the infrastructure and decentralization of the preceding sublayers.
However, without standardized protocols for the preceding infrastructure, it won't be easy to use. A good example is Dune, which processes filtering modules into dashboards, although they face other issues with their data.

To utilize the filtering sublayer, users need to have the MV and indexing sublayers, which is the main challenge. We plan to share this entire setup, prioritizing entities that benefit the Farcaster ecosystem.


## Sublayer Communication Structure


### TCP Communication via Message Pattern
We provide a TCP communication structure that's easiest for builders to use, with primary support for TypeScript implementations.

### (Planned) gRPC Transportation

We plan to support gRPC Transport for more robust communication. While it's not available yet, the standard protocols of the three sub-layers remain unchanged. Only the transportation type will change, enabling more precise and powerful product building.