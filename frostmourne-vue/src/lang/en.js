import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
export default {
  ...elementEnLocale,
  buttons: {
    search: 'search',
    add: 'add',
    run: 'run',
    export: 'export',
    edit: 'edit',
    delete: 'delete',
    cancel: 'cancel',
    confirm: 'confirm'
  },
  route: {
    Dashboard: 'Dashboard',
    AlarmManager: 'Alarm Manager',
    DataQuery: 'Data Query',
    DataManager: 'Data Manager',
    AccountManager: 'Account Manager',
    AlarmList: 'Alarm List',
    AlarmEdit: 'Alarm Edit',
    ExecuteLog: 'Execute Log',
    MyMessage: 'My Message',
    MessageTemplate: 'Message Template',
    Service: 'Service',
    DataSource: 'Data Source',
    DataName: 'Data Name',
    Account: 'Account',
    Team: 'Team',
    Department: 'Department'
  },
  login: {
    title: 'Frostmourne Alarm Manager'
  },
  alarm: {
    list: {
      add: 'Add Alarm',
      input_id: 'input id',
      input_name: 'input name, support vague search',
      input_status: 'status',
      input_service: 'choose service',
      input_status_open: 'OPEN',
      input_status_close: 'CLOSE',

      header_alarm_name: 'Name',
      header_alarm_type: 'Alarm Type',
      header_is_open: 'IsOpen',
      header_last_execute_result: 'Last Execute',
      header_last_execute_time: 'Last Execute Time',
      header_owner_object: 'Owner Object',
      header_modifier: 'modifier',
      header_last_modify_time: 'Last Modify Time',
      header_action: 'Action'
    },
    edit: {
      label_basic: 'Basic',
      label_alarm_name: 'Alarm Name',
      label_status_open: 'OPEN',
      label_status_close: 'CLOSE',
      label_service: 'Service',
      label_risk: 'Risk Level',
      label_info: 'info',
      label_important: 'important',
      label_emergency: 'emergency',
      label_crash: 'crash',
      label_owner: 'Owner Object',
      label_owner_placeholder: 'owner object identity',
      label_team: 'Team',
      label_team_placeholder: 'Choose team',
      label_description: 'Description',
      label_data_config: 'Data Config',
      label_data: 'Data',
      label_aggregation_type: 'Aggregation',
      label_pecentile: 'percentile',
      label_percentile_placeholder: 'for example: 90',
      label_aggregation_field: 'Aggregation Field',
      label_bucket_type: 'Bucket Type',
      label_bucket_field: 'Bucket Field',

      input_service: 'Please choose service'

    }
  },
  dashboard: {
    latest_30_day_alert_count: 'latest 30 days alert count',
    latest_30_day_message_count: 'latest 30 days message count',
    alarm_count: 'Alarms',
    schedule_count: 'Schedule count',
    alert_count: 'Alerts',
    message_count: 'Messages'
  }
}
