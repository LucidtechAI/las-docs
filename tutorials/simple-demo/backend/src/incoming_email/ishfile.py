import logging
import configparser
import jinja2

from ish import Cache, Project

from os import environ


logging.getLogger('ish').setLevel(logging.INFO)
MAIN_STACK_NAME = 'MainStack'


def config():
    jinja_root = 'src/jinja'
    jinja_env = jinja2.Environment(loader=jinja2.FileSystemLoader(jinja_root), undefined=jinja2.StrictUndefined)

    return {
        'stack_name': environ['STACK_NAME'],
        'cache_path': '.cache.json',
        'main_stack': MAIN_STACK_NAME,
        'template_parser': jinja_env.from_string,
        'deploy_args': {
            'Capabilities': ['CAPABILITY_IAM'],
        },
    }


def build_docker_image(project):
    config_path = environ['CONFIG_PATH']
    credentials_path = environ['CREDENTIALS_PATH']

    docker_image = project.create_docker_image(
        '.',
        dockerfile='Dockerfile',
        buildargs={
            'CONFIG_PATH': config_path,
            'CREDENTIALS_PATH': credentials_path,
        }
    )

    return docker_image


def build(project: Project):
    path = 'src/'
    config_path = environ['CONFIG_PATH']

    cfg = configparser.ConfigParser()
    cfg.read(config_path)
    receiver = cfg.get('default', 'receiver')

    email_event = project.create_json_schema(f'{path}email_event.json').raw
    docker_image_url = build_docker_image(project).url
    project.create_template(f'{path}main.yaml', MAIN_STACK_NAME, variables={
        'DockerImageUrl': docker_image_url,
        'EmailEvent': email_event,
        'Recipient': receiver,
    })

