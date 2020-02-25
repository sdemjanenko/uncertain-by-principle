---
layout: post
title: "Getting started with the Coral USB Accelerator on Windows"
---

Yesterday I received a Google Coral Edge TPU. This is a USB thumb-drive sized
FPGA which can improve ML performance. It works with the TensorFlow-lite
library. The device uses ~2-4 watts of power and has good [performance](https://blog.usejournal.com/google-coral-edge-tpu-vs-nvidia-jetson-nano-a-quick-deep-dive-into-edgeai-performance-bc7860b8d87a).

## Getting it to work on Windows 10

I was not able to get the Coral working by following the directions on Google's
website. I was not able to get it working through WSL, Anaconda or Git Bash. The
steps that worked were:
- [Install](https://coral.ai/docs/accelerator/get-started/#on-windows) the Windows Runtime
- In Powershell
  - If you don't have Python installed run `python`. You will be asked to
    install Python v3.7 at the Microsoft App Store.
  - [Install](https://www.tensorflow.org/lite/guide/python) tensorflow-list v3.7 for Windows 10
  - Run `pip install numpy Pillow`
- In WSL
  - Clone Google's example repository: `git clone https://github.com/google-coral/tflite.git coral-examples`
  - Run the install script to download models and test images: `cd coral-examples/python/examples/classification && bash install_requirements.sh`
  - Copy the `coral-examples` repository into a folder accessible from Powershell: `cp -r coral-examples /mnt/c/[user]`

## Running an example

Back in Powershell `cd coral-examples/python/examples/classification`. Then run the `classify_image.py` script:

```
python3 classify_image.py --model models/mobilenet_v2_1.0_224_inat_bird_quant_edgetpu.tflite --labels models/inat_bird_labels.txt --input images/parrot.jpg
```

With luck you will see a successful output:
```
INFO: Initialized TensorFlow Lite runtime.
----INFERENCE TIME----
Note: The first inference on Edge TPU is slow because it includes loading the model into Edge TPU memory.
15.7ms
5.0ms
4.6ms
4.4ms
4.6ms
-------RESULTS--------
Ara macao (Scarlet Macaw): 0.76172
```

This was the process that worked for me on my setup. I am interested in getting
it working directly in WSL and/or a Docker container.
