# infra-terraform
Infrastructure Automation using Terraform
=====================================

## Description
------------

A comprehensive infrastructure automation project leveraging Terraform to provision and manage cloud-based infrastructure resources.

## Features
------------

*   **Infrastructure as Code (IaC)**: Define infrastructure resources using human-readable configuration files, enabling reproducibility and version control.
*   **Multi-Cloud Support**: Manage AWS, Azure, Google Cloud Platform (GCP), and vSphere resources in a unified framework.
*   **State Management**: Terraform's state management ensures accurate resource tracking and updates.
*   **Automated Provisioning**: Easily provision and manage repeated sets of infrastructure resources.
*   **Extensibility**: Modular design allows for customization and extension with community-created modules.

## Technologies Used
-------------------

*   **Terraform**: An open-source, multi-cloud infrastructure as code management tool.
*   **Git**: A version control system for tracking and managing project revisions.
*   **Ansible**: A configuration management tool for automating infrastructure provisioning.

## Installation
------------

### Prerequisites

*   Install Terraform: <https://www.terraform.io/downloads>
*   Install Git: <https://git-scm.com/downloads>
*   Install Ansible: <https://docs.ansible.com/ansible/latest/installation/index.html>

### Steps

1.  Clone the project repository using Git:
    ```bash
    git clone https://github.com/your-username/infra-terraform.git
    ```
2.  Change directory into the project directory:
    ```bash
    cd infra-terraform
    ```
3.  Initialize Terraform:
    ```bash
    terraform init
    ```
4.  Validate the configuration:
    ```bash
    terraform validate
    ```
5.  Apply the configuration:
    ```bash
    terraform apply
    ```

### Configuration Files

Configuration files are stored in the `config` directory, organized by environment (e.g., `dev`, `prod`). Each directory contains Terraform files (.tf) and Ansible playbooks.

### Commit Messages

Commit messages should follow the conventional commit message format: `<type>(optional scope): <subject>`

*   `<type>`: one of `feat`, `fix`, `docs`, `style`, or `refactor`
*   `<scope>`: the affected component (e.g., `iam`, `network`, etc.)
*   `<subject>`: a brief description of the changes

### Contributing

Contributors are welcome to submit pull requests and issues.

## License
-------

MIT License

Copyright (c) 2023 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.