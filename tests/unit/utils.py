import os

def get_env_var(var_name, default_value):
    """
    Retrieves an environment variable.

    Args:
        var_name (str): The name of the environment variable.
        default_value (str): The default value to return if the variable is not set.

    Returns:
        str: The value of the environment variable, or the default value.
    """
    return os.environ.get(var_name, default_value)

def get_aws_access_key_id():
    return get_env_var('AWS_ACCESS_KEY_ID', 'default_access_key_id')

def get_aws_secret_access_key():
    return get_env_var('AWS_SECRET_ACCESS_KEY', 'default_secret_access_key')

def get_aws_region():
    return get_env_var('AWS_REGION', 'us-west-2')

def get_aws_default_tags():
    return {
        'environment': 'dev',
        'application': 'infra-terraform'
    }

def get_aws_credentials_file_path():
    return '~/.aws/credentials'

def get_aws_config_file_path():
    return '~/.aws/config'