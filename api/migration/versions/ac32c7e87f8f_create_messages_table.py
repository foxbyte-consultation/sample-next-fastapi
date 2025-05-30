"""create messages table

Revision ID: ac32c7e87f8f
Revises: 
Create Date: 2024-08-04 05:27:36.683583

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ac32c7e87f8f'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'messages',
        sa.Column('id', sa.Integer, primary_key=True, autoincrement=True),
        sa.Column('name', sa.String(255), nullable=False),
        sa.Column('message', sa.Text, nullable=False),
        sa.Column('password', sa.String(255), nullable=False),
        sa.Column('created_at', sa.DateTime, server_default=sa.func.now(), nullable=False),
        sa.Column('updated_at', sa.DateTime, server_default=sa.func.now(), onupdate=sa.func.now(), nullable=False),
        sa.Column('deleted_at', sa.DateTime, nullable=True),
    )

def downgrade():
    op.drop_table('messages')