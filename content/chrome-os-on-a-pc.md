---
title: Installing Chrome OS on a PC, With the Play Store
designation: EPH-003
slug: chrome-os-on-a-pc
sphere: ephemeris
kind: field-note
date: 2024-12-05
revised: 2026-02-19
status: settled
sigil: 3945017
reading: 6
epigraph: Destructive install. Read that phrase twice before you touch anything.
summary: A walkthrough for putting Chrome OS with Play Store support on ordinary PC hardware using Brunch and a recovery image — including the hardware caveats and the recovery path when it goes wrong.
tags: [chromeos, brunch, linux, hardware, refurbishing, it-support]
resonance: [local-first-or-else, welcome-to-the-archive]
external: https://jonathanjwagner.super.site/blog-posts/how-to-install-chrome-os-on-pc-with-play-store-support
external_label: Original article
---

Google ships Chrome OS on Chrome OS hardware. **Chrome OS Flex** runs on ordinary PCs but leaves out Android app support, which for most people is the actual reason to want it. **Brunch** closes that gap: a framework that wraps an official Chrome OS recovery image so it will boot on generic hardware, Play Store included.

I spent three years doing hardware repair and system deployment before any of the software on this dial existed, and this is a repair-shop note. The use case is a machine that is too slow for current Windows and too functional to throw away.

## What you are actually doing

Downloading an official recovery image for a Chromebook whose hardware generation resembles yours, wrapping it with Brunch, and writing the result to the target disk from a live Linux environment. I used Linux Mint on a USB stick as the working environment.

## Say the destructive part out loud

This overwrites the target drive. Not dual-boot, not a partition alongside your existing system — the whole disk.

Back up first. Then verify the backup by restoring one file from it, because an unverified backup is a feeling, not a backup. If the machine holds anything you have not copied elsewhere, stop and do that before continuing.

## Hardware caveats, in the order they will bite you

**Recovery image choice.** The image must match your CPU generation family. Wrong image, no boot, and the failure mode is a blank screen rather than an error message.

**Secure Boot and firmware.** Disable Secure Boot. Some vendor firmware also needs storage mode changed from RAID/Intel RST to AHCI before the installer will see the disk at all.

**Wi-Fi and audio.** The most likely partial failures. A supported Wi-Fi chipset is worth more than a faster processor here; keep a USB Ethernet adapter within reach.

**Touchpads and function keys.** Frequently imperfect. Usually livable.

## The recovery path

Before you begin, have a Windows or Linux installer on a second USB stick and confirm it boots. If Brunch does not come up, you want the escape route to already exist rather than to be assembling it on a machine that no longer has an operating system.

## Verdict, two years on

For a decade-old laptop that needs to browse, stream, and run a couple of Android apps, this is the best outcome available. It is also a maintenance commitment — you own the update path now, and that is the price of the Play Store.

Step-by-step commands are in the original article.
