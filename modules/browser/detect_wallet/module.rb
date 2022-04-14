#
# Copyright (c) 2006-2022 Wade Alcorn - wade@bindshell.net
# Browser Exploitation Framework (BeEF) - http://beefproject.com
# See the file 'doc/COPYING' for copying permission
#
class Detect_wallet < BeEF::Core::Command
  def post_execute
    content = {}
    content['wallet'] = @datastore['wallet']
    save content
  end
end
