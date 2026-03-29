#!/usr/bin/env python3

from __future__ import print_function
from __future__ import unicode_literals

import os
import sys
import subprocess

def main():
    try:
        # Check if the 'infra-terraform' directory exists
        if not os.path.exists('infra-terraform'):
            print("Error: The 'infra-terraform' directory does not exist.")
            sys.exit(1)

        # Navigate into the 'infra-terraform' directory
        os.chdir('infra-terraform')

        # Run Terraform to initialize the working directory
        subprocess.run(['terraform', 'init'], check=True)

        # Run Terraform to apply the configuration
        subprocess.run(['terraform', 'apply'], check=True)

        # Run Terraform to destroy the infrastructure
        subprocess.run(['terraform', 'destroy'], check=True)

    except subprocess.CalledProcessError as e:
        print("Error: %s" % e)
        sys.exit(1)

if __name__ == "__main__":
    main()