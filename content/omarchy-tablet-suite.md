---
title: Omarchy Tablet Suite
designation: MEC-010
slug: omarchy-tablet-suite
sphere: mechane
kind: instrument
date: 2026-09-07
status: maintained
sigil: 9301642
reading: 4
epigraph: A tablet interface should not require a second desktop environment hiding underneath it.
summary: Three independent, lightweight Omarchy plugins for tablet control, touch typing, and pointer input on Wayland — built in QML without dragging in a GNOME stack.
stack: [QML, Shell, Hyprland, Wayland, ydotool, wtype]
tags: [omarchy, linux, tablet, touch, wayland, qml]
resonance: [chrome-os-on-a-pc, the-instrument-is-the-argument]
external: https://github.com/frostmute/omarchy-omablet
external_label: Omablet repository
license: MIT
---

I wanted to use Omarchy as a proper touch-first environment. The pieces I could find either arrived attached to GNOME dependencies I did not want or stopped short of being useful as a complete daily interface. A screen keyboard alone does not solve rotation. Rotation alone does not solve precise pointer work. A tablet shell that requires a heavyweight desktop stack underneath it has missed the point.

The result is a suite of three small QML plugins. They work together, but each installs independently: **Omablet** handles tablet controls, **Omaqwerty** handles typing, and **Omaglide** handles the pointer.

<figure class="plate">
  <video controls preload="metadata" playsinline aria-label="Demonstration of the Omablet, Omaglide, and Omaqwerty touch controls">
    <source src="assets/omablet-demo.mp4" type="video/mp4">
    <a href="assets/omablet-demo.mp4">Download the Omablet suite demonstration video.</a>
  </video>
  <figcaption>Omablet, Omaglide, and Omaqwerty running together on an Omarchy tablet.</figcaption>
</figure>

## Omablet: the control surface

[Omablet](https://github.com/frostmute/omarchy-omablet) is the hub. It exposes manual display rotation, automatic rotation and rotation lock, launchers for the keyboard and trackpad, and a lock-screen action in one touch-sized panel. Automatic rotation is optional and uses `iio-sensor-proxy`; the rest of the panel does not depend on it.

Install it with `omarchy plugin add https://github.com/frostmute/omarchy-omablet.git --enable`.

## Omaqwerty: the keyboard

[Omaqwerty](https://github.com/frostmute/omarchy-omaqwerty) is a docked touch keyboard that reserves compositor work area while it is open, so tiled windows resize instead of disappearing behind it. It includes letters, numbers and symbols, a numpad, navigation keys, clipboard and Omaglide launchers, plus mouse-click fallback. Keyboard injection is handled by the small Wayland-native `wtype` utility.

Install it with `omarchy plugin add https://github.com/frostmute/omarchy-omaqwerty.git --enable`, then add its runtime with `omarchy pkg add wtype`.

## Omaglide: the pointer

[Omaglide](https://github.com/frostmute/omarchy-omaglide) turns a large touch surface into a relative pointer pad: drag to move, double-tap or press **Left click** to click, and use **Right click** for context menus. It also accepts ordinary mouse input, which makes setup and testing less awkward.

Install it with `omarchy plugin add https://github.com/frostmute/omarchy-omaglide.git --enable`, then run `~/.config/omarchy/plugins/io.github.frostmute.onscreen-trackpad/setup.sh`.

Omaglide uses `ydotool` through `/dev/uinput`. Its one-time setup installs the package if needed, adds the current user to the `input` group, and enables the user service. That permission allows synthetic pointer input, so the setup is deliberately visible rather than hidden inside plugin installation. Review the plugin and script before enabling it, then log out and back in after the group change.

## Three plugins, not one bundle

The split is intentional. Someone who only needs a docked keyboard should not have to configure sensor rotation or virtual pointer access. Someone with a convertible laptop may want rotation controls but no on-screen keyboard. Keeping the tools independent leaves each dependency attached to the feature that actually needs it, while Omablet provides the joined-up interface when the full tablet workflow is wanted.

All three projects are MIT licensed.